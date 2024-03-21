const DisplayImage = ({ props }: any) => {
  return (
    <>
      <img
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
        className={props.className}
        style={props.style}
      />
    </>
  );
};

export default DisplayImage;