import styled, { css } from 'styled-components';

import { SET_SELECTORS_SERVICE_CLASSNAMES } from 'models/exersices/SetSelectors/config';

import {
  Amulet as OriginalAmulet,
  Boots as OriginalBoots,
  Helmet as OriginalHelmet,
  Spell as OriginalSpell,
  Shield as OriginalShield,
  Sword as OriginalSword,
  Cuirass as OriginalCuirass,
} from './elements';
import backgroundImage from './img/background-image.jpg';

export const Root = styled.div<{ $day?: boolean }>`
  position: relative;

  width: 100%;
  height: 100%;

  background: url(${backgroundImage}) no-repeat center / cover;

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Amulet = styled(OriginalAmulet)<{ glow: boolean }>`
  position: absolute;
  bottom: 50%;
  right: 50%;

  width: 160px;
  height: 160px;

  transform: rotate(40deg);

  .${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
    transition: transform 0.4s ease;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
    transition: color 0.4s ease;
    color: #6c5e41;
  }

  ${({ glow }) =>
    glow &&
    css`
      .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
        color: #ffcb39;
      }

      & .${SET_SELECTORS_SERVICE_CLASSNAMES.glowStylized} {
        filter: drop-shadow(0 0 10px #ebae00);
      }
    `}
`;

export const Boots = styled(OriginalBoots)<{ sized: boolean }>`
  position: absolute;
  bottom: 10%;
  left: 10%;

  width: 110px;
  height: 110px;

  transform: rotate(-20deg);

  .${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
    transition: transform 0.4s ease;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
    transition: color 0.4s ease;
    color: #b68e49;
  }

  ${({ sized }) =>
    sized &&
    css`
      &.${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
        transform: scale(1.5);
      }
    `}
`;

export const Helmet = styled(OriginalHelmet)<{ sized: boolean; colored: boolean }>`
  position: absolute;
  bottom: 30%;
  left: 10%;

  width: 110px;
  height: 110px;

  transform: rotate(10deg);

  .${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
    transition: transform 0.4s ease;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized} {
    transition: color 0.4s ease;
    color: #a6ff8d;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
    transition: color 0.4s ease;
    color: #ff3737;
  }

  ${({ sized }) =>
    sized &&
    css`
      &.${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
        transform: scale(1.5);
      }
    `}

  ${({ colored }) =>
    colored &&
    css`
      .${SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized} {
        color: #a4a4a4;
      }

      .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
        color: #e8e8e8;
      }
    `}
`;

export const Cuirass = styled(OriginalCuirass)<{ sized: boolean }>`
  position: absolute;
  bottom: 10%;
  left: 30%;

  width: 190px;
  height: 190px;

  transform: rotate(-10deg);

  .${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
    transition: transform 0.4s ease;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
    transition: color 0.4s ease;
    color: #a4a4a4;
  }

  ${({ sized }) =>
    sized &&
    css`
      &.${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
        transform: scale(1.5);
      }
    `}
`;

export const Spell = styled(OriginalSpell)<{ $key: 1 | 2 | 3; glow: boolean }>`
  position: absolute;

  width: 140px;
  height: 140px;

  .${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
    transition: transform 0.4s ease;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized} {
    transition: color 0.4s ease;
    color: #ffe8b7;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
    transition: color 0.4s ease;
    color: #593c0d;
  }

  ${({ isPowerSpell }) =>
    isPowerSpell &&
    css`
      .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
        color: #ff4040;
      }
    `}

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          transform: rotate(10deg);
          top: 10%;
          right: 10%;
        `;
      case 2:
        return css`
          transform: rotate(20deg);
          top: 30%;
          right: 18%;
        `;
      case 3:
      default:
        return css`
          transform: rotate(-10deg);
          top: 10%;
          right: 30%;
        `;
    }
  }}

  ${({ glow }) =>
    glow &&
    css`
      filter: drop-shadow(0 0 10px #ebd700);
    `}
`;

export const Shield = styled(OriginalShield)<{ colored: boolean }>`
  position: absolute;
  bottom: 10%;
  right: 10%;

  width: 230px;
  height: 230px;

  transform: rotate(30deg);

  .${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
    transition: transform 0.4s ease;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
    transition: color 0.4s ease;
    color: #ffbc33;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized} {
    transition: color 0.4s ease;
    color: #b68e49;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.borderColorStylized} {
    transition: color 0.4s ease;
    color: #b68e49;
  }

  ${({ colored }) =>
    colored &&
    css`
      .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
        color: #d0d0d0;
      }

      .${SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized} {
        color: #9a9a9a;
      }

      .${SET_SELECTORS_SERVICE_CLASSNAMES.borderColorStylized} {
        color: #378cff;
      }
    `}
`;

export const Sword = styled(OriginalSword)`
  position: absolute;
  top: 0;
  left: 10%;

  transform: rotate(200deg);

  .${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
    transition: transform 0.4s ease;
  }

  .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
    transition: color 0.4s ease;
    color: #94762d;
  }
`;
