import styled from 'styled-components';

import backgroundImage from 'exercises/SetCascadeInheritance/Layout/img/background.jpg';
import duffelBagImage from 'exercises/SetCascadeInheritance/Layout/img/duffel-bag.png';
import { SetCascadeInheritance } from 'exercises/SetCascadeInheritance/utils';
import scrollImage from 'exercises/img/plain-scroll.svg';
import { mixin } from 'exercises/styles';
import { SetLayoutRoot } from 'exercises/ui';

// Todo: change background image
export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
  $overlayOpaque: 0.3,
})``;

export const Bag = styled.div`
  position: absolute;
  top: 35%;

  color: ${SetCascadeInheritance.COLORS.partOne.bagColor};

  ${mixin.centerX};
  ${mixin.backgroundImageContain(duffelBagImage)};
  ${mixin.square('700px')};
`;

export const Scroll = styled.div`
  box-sizing: border-box;

  position: absolute;
  top: 0;

  width: 280px;
  height: 280px;
  padding: 50px 80px 60px 80px;

  font-size: 16px;

  overflow: hidden;

  ${mixin.centerX};
  ${mixin.backgroundImageContain(scrollImage)}
  ${mixin.animate(['color'])}
`;
