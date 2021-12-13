import { ButtonHTMLAttributes, FC } from "react";
import style from './style.module.scss';
import clsx from 'clsx';
import { Spinner } from 'components/spinner';
import { Icon, IconElement } from 'components/icon';

/**
 * Determines size for button:
 * 	sm - small
 * 	md - middle
 * 	lg - large
 * 	xl - extra large
 */
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Determines styling for button
 * 	primary - red background, white text (main action)
 * 	secondary - grey background, black text (secondary action)
 * 	secondary-inverse - white background, black text (secondary action, but used on grey backgrounds).
 * 	ghost - button without color
 * 	negative - light-grey background, red text (negative action)
 * 	negative-inverse - white background, red text (negative action, but used on grey backgrounds)
 */
type ButtonVariant = 'primary' | 'secondary' | 'secondary-inverse' | 'ghost' | 'negative' | 'negative-inverse';

/**
 * Properties for Button component (also includes base props from HtmlElement and ButtonElement).
 */
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Button size.
	 * 
	 * Default = md
	 */
	size?: ButtonSize;

	/**
	 * Button variant.
	 *
	 * Default = primary
	 */
	variant?: ButtonVariant;

	/**
	 * Determines if the button is a spinner
	 * 
	 * If true then button content is only spinner.
	 * Disabled button cannot display a spinner (text will be shown instead if exists)
	 */
	spinner?: boolean;

	/**
	 * Icon for button content.
	 *
	 * Will be shown before text
	 */
	icon?: IconElement;
}

export const Button: FC<IProps> = (props) => {
	const {
		size = 'md',
		variant = 'primary',
		spinner,
		icon,
		...btnProps
	} = props;

	const isSpinnerVisible: boolean = !!spinner && !btnProps.disabled;
	const isTextVisible: boolean = !isSpinnerVisible && !!props.children;

	function getClassesByVariant(): string | string[] {
		switch (variant) {
			case 'primary':
				return style.typePrimary;
			case 'secondary':
				return style.typeSecondary;
			case 'secondary-inverse':
				return [style.typeSecondary, style.typeInverse];
			case 'ghost':
				return style.typeGhost;
			case 'negative':
				return style.typeNegative;
			case 'negative-inverse':
				return [style.typeNegative, style.typeInverse];
			default:
				return style.typePrimary;
		}
	}

	function getClassesBySize(): string {
		switch (size) {
			case 'sm':
				return style.sizeSm;
			case 'md':
				return style.sizeMd;
			case 'lg':
				return style.sizeLg;
			case 'xl':
				return style.sizeXl;
			default:
				return style.sizeMd;
		}
	}

	function getIconSize(): number {
		switch (size) {
			case 'sm':
				return 16;
			case 'md':
				return 24;
			case 'lg':
				return 24;
			case 'xl':
				return 32;
			default:
				return 16;
		}
	}

	return (
		<button
			{...btnProps}
			className={clsx(
				btnProps.className,
				getClassesByVariant(),
				getClassesBySize(),
			)}
		>
			{isSpinnerVisible ? (
				<Spinner
					height={getIconSize()}
					width={getIconSize()}
				/>
			) : (
				<>
					{icon && (
						<Icon
							icon={icon}
							deepInheritanceColor
							height={getIconSize()}
							width={getIconSize()}
							classNameWrapper={clsx(isTextVisible && style.iconWithText)}
						/>
					)}
					{props.children}
				</>
			)}
		</button>
	);
};