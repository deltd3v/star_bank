import { Component } from 'solid-js';

import s from './styles.module.scss';

export const Logo: Component<{
	class?: string | any;
	width?: number;
	height?: number;
	strokeColor?: string;
	strokeWidth?: number;
}> = (props) => {
	return (
		<svg
			class={s[props.class]}
			width={props.width || 910}
			height={props.height || 867}
			viewBox="0 0 910 867"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M371.142 325.08L455 66.9919L538.858 325.08C543.878 340.531 558.277 350.992 574.522 350.992H845.892L626.349 510.499C613.206 520.048 607.706 536.974 612.727 552.425L696.585 810.513L477.042 651.006C463.899 641.456 446.101 641.456 432.958 651.006L213.415 810.513L297.273 552.425C302.294 536.974 296.794 520.048 283.651 510.498L64.1081 350.992H335.478C351.724 350.992 366.122 340.53 371.142 325.08Z"
				stroke={props.strokeColor || 'var(--accent)'}
				stroke-width={props.strokeWidth || '100'}
			/>
		</svg>
	);
};

export default Logo;
