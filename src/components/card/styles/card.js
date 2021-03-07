import styled from 'styled-components/macro'

export const Title = styled.p`
  color: #e5e5e5;
  font-size: 24px;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`

export const Entities = styled.div`
  display: flex;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  user-select: none;
  line-height: noraml;
  display: none;
`

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => fontWeight === 'bold' ? 'bold' : 'normal'};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  height: 360px;
  position: relative;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;
    
    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    
    ${FeatureText} {
      font-size: 14px;
    }
`

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`

export const FeatureClose = styled.button`
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 20px;
  border: 0;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-size: 12px;
  margin-right: 10px;
  font-weight: bold;
  font-shadow: 2px 4px 4px rgb(0, 0, 0, 0.2);
  border-radius: 15px;
`