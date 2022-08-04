import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { flag } from './SignPage';
const AvatarChoosing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    
    
    // if(!flag){
    //   navigate('/SignUp');
    // }
    

    const subdomain = 'demo'; // Replace with your custom subdomain
    const frame = document.getElementById('frame');

    frame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`;

    window.addEventListener('message', subscribe);
    document.addEventListener('message', subscribe);

    function subscribe(event) {
      const json = parse(event);

      if (json?.source !== 'readyplayerme') {
        return;
      }

      // Susbribe to all events sent from Ready Player Me once frame is ready
      if (json.eventName === 'v1.frame.ready') {
        frame.contentWindow.postMessage(
          JSON.stringify({
            target: 'readyplayerme',
            type: 'subscribe',
            eventName: 'v1.**'
          }),
          '*'
        );
      }

      // Get avatar GLB URL
      if (json.eventName === 'v1.avatar.exported') {
        console.log(`Avatar URL: ${json.data.url}`);
        //  console.log("Avatar URL:" ${json.data.url})
        document.getElementById('frame').hidden = true;
        navigate(`/Profile`);
      }

      // Get user id
      if (json.eventName === 'v1.user.set') {
        console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
        
      }
      
    }

    function parse(event) {
      try {
        return JSON.parse(event.data);
      } catch (error) {
        return null;
      }
    }

    
  });
 
  return (
    
    <avatarchoose>
      <body>
    <iframe id="frame" class="frame" allow="camera *; microphone *; clipboard-write"></iframe>
    </body>
    </avatarchoose>
  )
}

export default AvatarChoosing