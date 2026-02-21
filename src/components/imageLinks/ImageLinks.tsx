import './ImageLinksStyles.css';
import HocExample from '../../assets/hocexample.jpg';
import HocExampleForm from '../../assets/hocexample2.jpg';
import FsmExample from '../../assets/fsmexample.jpg';

interface ImageLinkItem {
  image: string;
  url: string;
  alt: string;
}

const ImageLinks = () => {
  const items: ImageLinkItem[] = [
    {
      image: HocExample,
      url: 'https://github.com/faustou/react-hoc-theme-variants',
      alt: 'react-hoc-theme-variants',
    },
    {
      image: HocExampleForm,
      url: 'https://github.com/faustou/React-HOC-Form',
      alt: 'React-HOC-Form',
    },
    {
      image: FsmExample,
      url: 'https://github.com/faustou/Finite-State-Machine-FSM-',
      alt: 'Finite-State-Machine',
    },
  ];

  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="image-links-container">
      {items.map((item, index) => (
        <div
          key={index}
          className="image-link-card"
          onClick={() => handleClick(item.url)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleClick(item.url)}
        >
          <img src={item.image} alt={item.alt} />
          <div className="image-link-overlay">
            <span className="image-link-icon">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/ios-filled/50/ffffff/external-link-squared.png"
                alt="abrir"
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageLinks;
