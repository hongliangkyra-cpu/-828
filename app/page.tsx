import { Homepage } from './homepage';
import MegaMenu from './mega-menu';

export default function Page() {
  return (
    <div className="preview-stage live-homepage">
      <MegaMenu />
      <Homepage />
    </div>
  );
}
