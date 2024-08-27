// material-ui

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <MainCard title="Experience the Pinnacle of Custom Timber & Log Home Design
"><button onClick={() => window.location.reload(true)}>Refresh page </button>

    <img
          className="h-96 w-full rounded-lg object-cover object-center"
 style={{width: '100%', height: '100vh'}}
      src="https://w0.peakpx.com/wallpaper/330/440/HD-wallpaper-wood-house-architecture-cozy-houses-interior-love-four-seasons-home-attractions-in-dreams-living-exterior-garden-beautiful-houses-wood.jpg"
      alt="Experience the Pinnacle of Custom Timber & Log Home Design  "
    />

    </MainCard>
  );
}
