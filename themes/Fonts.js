import { Global } from '@emotion/react';

const Fonts = (props) => {
    return (
        <Global
            styles={`
                @font-face {
                    font-family: 'Large';
                    src: url('/fonts/Large.ttf') format('truetype');
                  }
      `}
        />
    );
};

export default Fonts;