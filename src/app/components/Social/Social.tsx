import { FC } from "react";

export interface ISocial {
  image: string;
  name: string;
}

const Social: FC<ISocial> = ({ image, name }) => {
  return (
    <li>
      <a href="">
        <img src={image} alt={`${name} icon`} />
      </a>
    </li>
  );
};
export default Social;
