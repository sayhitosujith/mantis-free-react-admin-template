// material-ui

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <MainCard title="Sample Card">
    <img
      className="h-96 w-full rounded-lg object-cover object-center"
      src="https://w0.peakpx.com/wallpaper/330/440/HD-wallpaper-wood-house-architecture-cozy-houses-interior-love-four-seasons-home-attractions-in-dreams-living-exterior-garden-beautiful-houses-wood.jpg"
      alt="nature img"
    />
    </MainCard>
  );
}
