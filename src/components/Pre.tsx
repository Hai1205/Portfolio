interface PreProps {
  load: boolean;
}

function Pre(props: PreProps) {
  return <div id={props?.load ? "preloader" : "preloader-none"} />;
}

export default Pre;