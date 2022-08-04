import React from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";
function App() {
  
//   const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
//     loaderUrl: "HerokuGzip/Build/HerokuGzip.loader.js",
//     dataUrl: "HerokuGzip/Build/HerokuGzip.data.unityweb",
//     frameworkUrl: "HerokuGzip/Build/HerokuGzip.framework.js.unityweb",
//     codeUrl: "HerokuGzip/Build/HerokuGzip.wasm.unityweb",
//   });
// //   return <Unity unityProvider={unityProvider} />;
//   return (
//     <fragment>
//       {!isLoaded && (
//         <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
//       )}
//       <Unity
//         unityProvider={unityProvider}
//         style={{ visibility: isLoaded ? "visible" : "hidden" }}
//       />
//     </fragment>
//   );
return(
<avatarchoose>
<body>
<iframe id="world" src="https://i.simmer.io/@ps_uNITED/amigosphere"class="frame" ></iframe>
</body>
</avatarchoose>
);
}
export default App;