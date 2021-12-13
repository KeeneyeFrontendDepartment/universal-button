import clsx from 'clsx';
import React, { FC, ReactComponentElement } from 'react';
import style from './style.module.scss';

export type IconElement = ReactComponentElement<React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string; }>>;

interface IProps extends React.SVGProps<SVGSVGElement> {
	icon: IconElement;
	deepInheritanceColor?: boolean;
	classNameWrapper?: string;
}

export const Icon: FC<IProps> = (props) => {
	const { icon, deepInheritanceColor, classNameWrapper, ...svgProps } = props;

	return (
		<div
			className={clsx(
				style.iconContainer,
				classNameWrapper,
				deepInheritanceColor && style.deepInheritanceColor
			)}
			style={{
				height: props.height,
				width: props.width
			}}
		>
			{React.cloneElement(icon,
				{
					...svgProps,
					height: '100%',
					width: '100%',
					fill: deepInheritanceColor ? 'currentColor' : props.fill
				})
			}
		</div>
	);
};