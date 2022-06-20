// eslint-disable-next-line import/named
import { HMSPeer, useVideo } from "@100mslive/react-sdk";

type Props = {
  peer: HMSPeer;
};

export default function VideoTile({ peer }: Props) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });

  return (
    <div>
      <video ref={videoRef} autoPlay muted playsInline />
      <div>
        {peer.name} {peer.isLocal ? "(YOU)" : ""}
      </div>
    </div>
  );
}
