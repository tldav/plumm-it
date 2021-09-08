import { useRef } from "react";

const useRenderCount = (fileName) => {
	const renders = useRef(0);
	console.log(`renders of ${fileName}`, renders.current++);
};

export default useRenderCount;
