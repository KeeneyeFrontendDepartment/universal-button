import clsx from 'clsx';
import { FC } from "react";
import { ReactComponent as SpinnerIcon } from 'assets/img/icon/spinner.svg';
import style from './style.module.scss';

interface IProps extends React.SVGProps<SVGSVGElement> { }

export const Spinner: FC<IProps> = (props) => {

	return (
		<SpinnerIcon {...props} className={clsx(props.className, style.spinner)} />
	);
};