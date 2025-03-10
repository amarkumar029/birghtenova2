const VideoComponent = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <video 
        className="w-full rounded-2xl shadow-lg" 
        preload="auto" 
        loop 
        autoPlay 
        muted 
        playsInline 
        controls
      >
        <source 
          src="https://video.wixstatic.com/video/606caf_23ef26a6f9bd4480a59f439796a5ef3a/720p/mp4/file.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;