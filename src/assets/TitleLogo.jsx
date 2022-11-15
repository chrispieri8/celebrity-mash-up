import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  height: 3em;

  #fac,
  #swap {
    fill: ${({ theme }) => theme.text.main};
    transition: all 0.25s;
  }

  #first_e {
    fill: ${({ theme }) => theme.primary.main};
    transition: all 0.25s;
  }

  #second_e {
    fill: ${({ theme }) => theme.secondary.main};
    transition: all 0.25s;
  }

  @media (max-width: 480px) {
    height: 2em;
  }
`;

export default function TitleLogo() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.368 60.992">
      <g id="faceeswap_logo" transform="translate(190.464 1756.36)">
        <g id="second_part">
          <path
            id="swap"
            d="M16.576.64A25.943,25.943,0,0,1,8.32-.7a20.136,20.136,0,0,1-6.912-3.84l3.2-5.376a27.57,27.57,0,0,0,5.984,3.3A16.042,16.042,0,0,0,16.384-5.5a7.32,7.32,0,0,0,4.032-.96,3.092,3.092,0,0,0,1.472-2.752A2.749,2.749,0,0,0,20.16-11.84a37.313,37.313,0,0,0-5.632-1.92q-3.264-.9-5.568-1.728a14.29,14.29,0,0,1-3.712-1.888A6.459,6.459,0,0,1,3.2-19.808a7.764,7.764,0,0,1-.64-3.3,10.435,10.435,0,0,1,.992-4.608A10.039,10.039,0,0,1,6.336-31.2a12.888,12.888,0,0,1,4.192-2.208,17.03,17.03,0,0,1,5.216-.768,22.425,22.425,0,0,1,7.072,1.088,17.235,17.235,0,0,1,6.048,3.52l-3.456,5.184a20.082,20.082,0,0,0-4.96-2.816,13.558,13.558,0,0,0-4.768-.9,6.9,6.9,0,0,0-3.648.9,3.117,3.117,0,0,0-1.472,2.88,2.785,2.785,0,0,0,.352,1.472,3.1,3.1,0,0,0,1.12,1.024,10.932,10.932,0,0,0,2.016.864q1.248.416,3.1.864,3.456.9,5.92,1.792A16.117,16.117,0,0,1,27.1-16.256a7.291,7.291,0,0,1,2.3,2.656,8.158,8.158,0,0,1,.736,3.616A9.332,9.332,0,0,1,26.5-2.208Q22.848.64,16.576.64ZM72.832-33.536H80.96L66.944,0H59.9l-5.76-14.72L48.448,0h-7.04L27.456-33.536H35.52L45.5-8.064l4.1-10.88L43.712-33.472h6.912l3.52,10.3,3.584-10.3H64.64L58.816-18.944l4.032,10.88ZM89.408.64a12.722,12.722,0,0,1-4.544-.8A10.923,10.923,0,0,1,81.216-2.4a10.426,10.426,0,0,1-2.4-3.36,10.175,10.175,0,0,1-.864-4.224,9.305,9.305,0,0,1,1.056-4.384,10.053,10.053,0,0,1,2.944-3.424A14.6,14.6,0,0,1,86.464-20a19.682,19.682,0,0,1,5.76-.8,24.819,24.819,0,0,1,4.384.384,17.857,17.857,0,0,1,3.808,1.088v-1.92a6.723,6.723,0,0,0-1.888-5.12,7.85,7.85,0,0,0-5.6-1.792,14.832,14.832,0,0,0-5.248.96,24.371,24.371,0,0,0-5.248,2.816l-2.624-5.44A24.76,24.76,0,0,1,93.76-34.112q7.232,0,11.232,3.552t4,10.272V-9.856a3.014,3.014,0,0,0,.48,1.92,2.1,2.1,0,0,0,1.568.64V0a19.094,19.094,0,0,1-3.776.448A5.718,5.718,0,0,1,103.52-.64a4.677,4.677,0,0,1-1.632-2.88L101.7-5.376A14.842,14.842,0,0,1,96.256-.9,15.622,15.622,0,0,1,89.408.64ZM91.84-5.632A11.173,11.173,0,0,0,95.968-6.4a7.492,7.492,0,0,0,3.04-2.048,3.081,3.081,0,0,0,1.408-2.432v-3.84a21,21,0,0,0-3.328-.928A17.926,17.926,0,0,0,93.632-16a9.162,9.162,0,0,0-5.44,1.5,4.516,4.516,0,0,0-2.112,3.808,4.582,4.582,0,0,0,1.664,3.616A6.04,6.04,0,0,0,91.84-5.632ZM133.248.64a13.215,13.215,0,0,1-6.912-1.76,12.521,12.521,0,0,1-4.608-4.768v19.52h-8.576V-33.536h7.488v5.76a13.684,13.684,0,0,1,4.8-4.64,13.345,13.345,0,0,1,6.784-1.7,14.359,14.359,0,0,1,6.272,1.376,15.533,15.533,0,0,1,4.96,3.712,17.275,17.275,0,0,1,3.264,5.5,18.946,18.946,0,0,1,1.184,6.688,21.134,21.134,0,0,1-1.088,6.848,17.525,17.525,0,0,1-3.04,5.568A14.175,14.175,0,0,1,139.136-.7,12.98,12.98,0,0,1,133.248.64Zm-2.88-7.3a7.707,7.707,0,0,0,3.552-.832,8.609,8.609,0,0,0,2.784-2.24,10.513,10.513,0,0,0,1.792-3.264,11.7,11.7,0,0,0,.64-3.84,10.837,10.837,0,0,0-.7-3.936,9.771,9.771,0,0,0-1.952-3.168,9.093,9.093,0,0,0-2.944-2.112,8.816,8.816,0,0,0-3.68-.768,8.052,8.052,0,0,0-2.5.416,8.8,8.8,0,0,0-2.368,1.184,10.366,10.366,0,0,0-1.952,1.792,7.446,7.446,0,0,0-1.312,2.24v7.872a11.4,11.4,0,0,0,3.52,4.768A8.052,8.052,0,0,0,130.368-6.656Z"
            transform="translate(-57 -1709)"
          />
          <path
            id="second_e"
            d="M19.456.64a18.609,18.609,0,0,1-7.3-1.376A16.73,16.73,0,0,1,6.592-4.48a16.62,16.62,0,0,1-3.552-5.5,17.664,17.664,0,0,1-1.248-6.592,18.679,18.679,0,0,1,1.216-6.752A16.479,16.479,0,0,1,6.528-28.9a16.805,16.805,0,0,1,5.6-3.808,18.64,18.64,0,0,1,7.392-1.408A18.178,18.178,0,0,1,26.848-32.7a16.851,16.851,0,0,1,5.5,3.776,16.047,16.047,0,0,1,3.456,5.5A18.33,18.33,0,0,1,36.992-16.9q0,.832-.032,1.6a6.509,6.509,0,0,1-.16,1.28H10.88a9.951,9.951,0,0,0,.96,3.52,8.7,8.7,0,0,0,1.984,2.624,8.641,8.641,0,0,0,2.752,1.664,9.039,9.039,0,0,0,3.2.576A9.886,9.886,0,0,0,24.608-6.88a6.606,6.606,0,0,0,3.1-3.3l7.36,2.048a14.962,14.962,0,0,1-5.92,6.3A18.348,18.348,0,0,1,19.456.64Zm8.7-20.224a8.915,8.915,0,0,0-2.784-6.048A8.509,8.509,0,0,0,19.392-27.9a8.541,8.541,0,0,0-3.232.608A8.433,8.433,0,0,0,13.5-25.6a8.79,8.79,0,0,0-1.888,2.624,9.247,9.247,0,0,0-.864,3.392Z"
            transform="translate(-91 -1709)"
          />
        </g>
        <g id="first_part">
          <path
            id="first_e"
            d="M19.456.64a18.609,18.609,0,0,1-7.3-1.376A16.73,16.73,0,0,1,6.592-4.48a16.62,16.62,0,0,1-3.552-5.5,17.664,17.664,0,0,1-1.248-6.592,18.679,18.679,0,0,1,1.216-6.752A16.479,16.479,0,0,1,6.528-28.9a16.805,16.805,0,0,1,5.6-3.808,18.64,18.64,0,0,1,7.392-1.408A18.178,18.178,0,0,1,26.848-32.7a16.851,16.851,0,0,1,5.5,3.776,16.047,16.047,0,0,1,3.456,5.5A18.33,18.33,0,0,1,36.992-16.9q0,.832-.032,1.6a6.509,6.509,0,0,1-.16,1.28H10.88a9.951,9.951,0,0,0,.96,3.52,8.7,8.7,0,0,0,1.984,2.624,8.641,8.641,0,0,0,2.752,1.664,9.039,9.039,0,0,0,3.2.576A9.886,9.886,0,0,0,24.608-6.88a6.606,6.606,0,0,0,3.1-3.3l7.36,2.048a14.962,14.962,0,0,1-5.92,6.3A18.348,18.348,0,0,1,19.456.64Zm8.7-20.224a8.915,8.915,0,0,0-2.784-6.048A8.509,8.509,0,0,0,19.392-27.9a8.541,8.541,0,0,0-3.232.608A8.433,8.433,0,0,0,13.5-25.6a8.79,8.79,0,0,0-1.888,2.624,9.247,9.247,0,0,0-.864,3.392Z"
            transform="translate(-108 -1709)"
          />
          <path
            id="fac"
            d="M5.952,0V-25.216H1.536v-6.528H5.952v-2.048q0-6.272,3.008-9.92a10.054,10.054,0,0,1,8.192-3.648,19.055,19.055,0,0,1,8.256,1.984L23.68-38.912a10.757,10.757,0,0,0-2.272-.864,9.327,9.327,0,0,0-2.4-.352q-4.48,0-4.48,6.016v2.368H22.72v6.528H14.528V0ZM32.384.64a12.722,12.722,0,0,1-4.544-.8A10.923,10.923,0,0,1,24.192-2.4a10.426,10.426,0,0,1-2.4-3.36,10.175,10.175,0,0,1-.864-4.224,9.305,9.305,0,0,1,1.056-4.384,10.053,10.053,0,0,1,2.944-3.424A14.6,14.6,0,0,1,29.44-20a19.682,19.682,0,0,1,5.76-.8,24.819,24.819,0,0,1,4.384.384,17.857,17.857,0,0,1,3.808,1.088v-1.92a6.723,6.723,0,0,0-1.888-5.12,7.85,7.85,0,0,0-5.6-1.792,14.832,14.832,0,0,0-5.248.96,24.371,24.371,0,0,0-5.248,2.816l-2.624-5.44a24.76,24.76,0,0,1,13.952-4.288q7.232,0,11.232,3.552t4,10.272V-9.856a3.014,3.014,0,0,0,.48,1.92,2.1,2.1,0,0,0,1.568.64V0A19.094,19.094,0,0,1,50.24.448,5.718,5.718,0,0,1,46.5-.64a4.677,4.677,0,0,1-1.632-2.88l-.192-1.856A14.842,14.842,0,0,1,39.232-.9,15.622,15.622,0,0,1,32.384.64Zm2.432-6.272A11.173,11.173,0,0,0,38.944-6.4a7.492,7.492,0,0,0,3.04-2.048,3.081,3.081,0,0,0,1.408-2.432v-3.84a21,21,0,0,0-3.328-.928A17.926,17.926,0,0,0,36.608-16a9.162,9.162,0,0,0-5.44,1.5,4.516,4.516,0,0,0-2.112,3.808A4.582,4.582,0,0,0,30.72-7.072,6.04,6.04,0,0,0,34.816-5.632Zm19.2-11.136a18.248,18.248,0,0,1,1.216-6.656,16.208,16.208,0,0,1,3.52-5.5A17.133,17.133,0,0,1,64.32-32.7a18.408,18.408,0,0,1,7.36-1.408,17.639,17.639,0,0,1,9.376,2.368,15.125,15.125,0,0,1,5.792,6.208l-8.384,2.56a7.532,7.532,0,0,0-2.88-2.848,8.055,8.055,0,0,0-3.968-.992,8.169,8.169,0,0,0-3.456.736,8.495,8.495,0,0,0-2.784,2.048,9.486,9.486,0,0,0-1.856,3.168,11.955,11.955,0,0,0-.672,4.1,11.465,11.465,0,0,0,.7,4.1,10.324,10.324,0,0,0,1.888,3.2,8.3,8.3,0,0,0,2.784,2.08,8.021,8.021,0,0,0,3.392.736,8.224,8.224,0,0,0,4.256-1.152,6.479,6.479,0,0,0,2.72-2.816l8.384,2.56a14.1,14.1,0,0,1-5.7,6.272A17.9,17.9,0,0,1,71.744.64a18.408,18.408,0,0,1-7.36-1.408,16.885,16.885,0,0,1-5.568-3.808,16.9,16.9,0,0,1-3.552-5.568A17.911,17.911,0,0,1,54.016-16.768Z"
            transform="translate(-192 -1709)"
          />
        </g>
      </g>
    </Svg>
  );
}
