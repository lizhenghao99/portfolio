import { Global } from '@emotion/react';

const Fonts = (props) => {
    return (
        <Global
            styles={`
                @font-face {
                    font-family: 'Zh Caption';
                    src: url('/fonts/ZhTitleSoft.ttf') format('truetype');
                }
                @font-face {
                    font-family: 'Zh Body';
                    src: url('/fonts/ZhBody.ttf') format('truetype');
                }
      `}
        />
    );
};

export default Fonts;