
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { AspectRatio, VideoGenerationState } from './types';

const VeoStudio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(AspectRatio.PORTRAIT);
  const [state, setState] = useState<VideoGenerationState>({ status: 'idle' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!selectedImage) return;

    setState({ status: 'checking_key', progressMessage: 'Verifying API Access...' });

    try {
      setState({ status: 'generating', progressMessage: 'Initializing Veo 3.1 Fast...' });

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Soft cinematic animation of this wellness magazine aesthetic, subtle movement in textures and lighting, calming atmosphere.',
        image: {
          imageBytes: base64Data,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio === AspectRatio.LANDSCAPE ? '16:9' : '9:16'
        }
      });

      setState({ status: 'polling', progressMessage: 'Painting your cinematic story... (this can take a few minutes)' });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await videoResponse.blob();
        const videoUrl = URL.createObjectURL(blob);
        setState({ status: 'completed', videoUri: videoUrl });
      } else {
        throw new Error("No video generated in response.");
      }

    } catch (err: any) {
      console.error(err);
      setState({ status: 'error', error: err.message || 'Failed to animate image.' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl text-[#5D5276] mb-4">Veo Animation Studio</h2>
        <p className="text-[#7A6E94] max-w-lg mx-auto">
          Animate your editorial photography with high-end cinematic movement. 
          Perfect for mood reels and social media "Sisterly Advice" guides.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 bg-white p-8 rounded-[2rem] shadow-sm border border-[#7A6E94]/10">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#7A6E94] mb-4">
              1. Upload Reference Image
            </label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="group relative cursor-pointer aspect-square rounded-2xl overflow-hidden border-2 border-dashed border-[#7A6E94]/20 hover:border-[#98DDC8] transition-all flex items-center justify-center bg-[#F8F8FA]"
            >
              {selectedImage ? (
                <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-[#7A6E94]/10 rounded-full flex items-center justify-center mx-auto mb-3 text-[#7A6E94] group-hover:text-[#98DDC8]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-[#7A6E94]">Click to upload editorial photo</p>
                </div>
              )}
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#7A6E94] mb-4">
              2. Choose Aspect Ratio
            </label>
            <div className="flex gap-4">
              <button 
                onClick={() => setAspectRatio(AspectRatio.PORTRAIT)}
                className={`flex-1 py-3 rounded-xl border transition-all text-xs font-bold uppercase tracking-widest ${aspectRatio === AspectRatio.PORTRAIT ? 'bg-[#7A6E94] text-white border-[#7A6E94]' : 'bg-white text-[#7A6E94] border-[#7A6E94]/20'}`}
              >
                9:16 Portrait
              </button>
              <button 
                onClick={() => setAspectRatio(AspectRatio.LANDSCAPE)}
                className={`flex-1 py-3 rounded-xl border transition-all text-xs font-bold uppercase tracking-widest ${aspectRatio === AspectRatio.LANDSCAPE ? 'bg-[#7A6E94] text-white border-[#7A6E94]' : 'bg-white text-[#7A6E94] border-[#7A6E94]/20'}`}
              >
                16:9 Landscape
              </button>
            </div>
          </div>

          <button
            onClick={generateVideo}
            disabled={!selectedImage || state.status === 'generating' || state.status === 'polling'}
            className="w-full py-4 rounded-2xl bg-[#98DDC8] text-[#5D5276] font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
          >
            {state.status === 'idle' ? 'Generate Veo Animation' : 'Processing...'}
          </button>
        </div>

        <div className="space-y-6">
          <div className={`aspect-[9/16] max-h-[600px] w-full mx-auto rounded-[2rem] border border-[#7A6E94]/10 bg-white overflow-hidden shadow-lg flex flex-col items-center justify-center p-8 text-center transition-all ${aspectRatio === AspectRatio.LANDSCAPE ? 'aspect-[16/9]' : ''}`}>
            {state.status === 'idle' && (
              <p className="text-[#7A6E94] italic">Your cinematic generation will appear here.</p>
            )}

            {(state.status === 'generating' || state.status === 'polling' || state.status === 'checking_key') && (
              <div className="space-y-6">
                <div className="relative w-20 h-20 mx-auto">
                   <div className="absolute inset-0 rounded-full border-4 border-[#98DDC8]/20 animate-pulse"></div>
                   <div className="absolute inset-0 rounded-full border-t-4 border-[#98DDC8] animate-spin"></div>
                </div>
                <div>
                  <h3 className="text-[#5D5276] font-serif text-xl mb-2">Creating Magic...</h3>
                  <p className="text-[#7A6E94] text-sm animate-pulse">{state.progressMessage}</p>
                </div>
              </div>
            )}

            {state.status === 'completed' && state.videoUri && (
              <video 
                src={state.videoUri} 
                controls 
                autoPlay 
                loop 
                className="w-full h-full object-cover rounded-xl"
              />
            )}

            {state.status === 'error' && (
              <div className="text-red-500 space-y-4">
                <p>Oops! Something went wrong.</p>
                <p className="text-xs">{state.error}</p>
                <button onClick={() => setState({status: 'idle'})} className="text-[#7A6E94] underline text-xs">Try again</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeoStudio;

