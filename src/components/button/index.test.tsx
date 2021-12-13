import { Button } from 'components/button';
import style from './style.module.scss';
import spinnerStyle from '../spinner/style.module.scss';
import { render, screen } from '@testing-library/react';
import { ReactComponent as HeartIcon } from 'assets/img/icon/heart.svg';

describe('Button component', () => {

	it('Button renders', () => {
		render(<Button />);

		const btnEl = screen.getByRole('button');

		expect(btnEl).toBeInTheDocument();
	});

	describe('Size', () => {
		it('Set to md by default', () => {
			render(<Button />);

			const buttonEl = screen.getByRole('button');

			expect(buttonEl).toHaveClass(style.sizeMd)
		})

		describe('Set manually to:', () => {
			it('Small', () => {
				render(<Button size="sm" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.sizeSm)
			})

			it('Middle', () => {
				render(<Button size="md" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.sizeMd)
			})

			it('Large', () => {
				render(<Button size="lg" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.sizeLg)
			})

			it('Extra large', () => {
				render(<Button size="xl" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.sizeXl)
			})
		})
	});

	describe('Variant', () => {
		it('Set to primary by default', () => {
			render(<Button />);

			const buttonEl = screen.getByRole('button');

			expect(buttonEl).toHaveClass(style.typePrimary);
		});

		describe('Set manually to:', () => {
			it('Primary', () => {
				render(<Button variant="primary" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.typePrimary);
			});

			it('Secondary', () => {
				render(<Button variant="secondary" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.typeSecondary);
			});

			it('Secondary inverse', () => {
				render(<Button variant="secondary-inverse" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.typeSecondary, style.typeInverse);
			});

			it('Negative', () => {
				render(<Button variant="negative" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.typeNegative);
			});

			it('Negative inverse', () => {
				render(<Button variant="negative-inverse" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.typeNegative, style.typeInverse);
			});

			it('Ghost', () => {
				render(<Button variant="ghost" />);

				const buttonEl = screen.getByRole('button');

				expect(buttonEl).toHaveClass(style.typeGhost);
			});
		})
	});

	describe('Content type', () => {

		it('Contain text', () => {
			const text = 'text only'
			render(<Button>{text}</Button>);

			const textEl = screen.getByText(text);

			expect(textEl).toBeInTheDocument();
		});

		it('Contain icon', () => {
			render(<Button icon={<HeartIcon title="icon" />} />);

			const iconEl = screen.getByTitle('icon');

			expect(iconEl).toBeInTheDocument();
		});

		it('Contain icon with text', () => {
			const text = 'icon with text'
			render(<Button icon={<HeartIcon title="icon" />}>{text}</Button>);

			const textEl = screen.getByText(text);
			const iconEl = screen.getByTitle('icon');

			expect(textEl).toBeInTheDocument();
			expect(iconEl).toBeInTheDocument();
		});

		describe('Spinner', () => {
			it('Contain spinner only', () => {
				const text = 'spinner only'
				render(
					<Button
						icon={<HeartIcon title="icon" />}
						spinner
					>
						{text}
					</Button>
				);

				const buttonEl = screen.getByRole('button');
				const iconEl = screen.queryByTitle('icon');
				const textEl = screen.queryByText(text);

				expect(buttonEl.firstChild).toHaveClass(spinnerStyle.spinner)
				expect(iconEl).not.toBeInTheDocument();
				expect(textEl).not.toBeInTheDocument();
			});

			it('Not contain spinner when disabled', () => {
				const text = 'icon text + disabled spinner'
				render(
					<Button
						contentType="text-icon"
						icon={<HeartIcon title="heart" />}
						spinner
						disabled
					>
						{text}
					</Button>
				);

				const buttonEl = screen.getByRole('button');
				const iconEl = screen.getByTitle('heart');
				const textEl = screen.getByText(text);

				expect(buttonEl.firstChild).not.toHaveClass(spinnerStyle.spinner)
				expect(iconEl).toBeInTheDocument();
				expect(textEl).toBeInTheDocument();
			});
		})

	});

	describe('Events', () => {
		it('React on click', () => {
			const fn = jest.fn();
			render(<Button onClick={fn} />);

			const buttonEl = screen.getByRole('button');
			buttonEl.click()

			expect(fn).toBeCalled();
		});

		it('Not react on click when disabled', () => {
			const fn = jest.fn();
			render(<Button onClick={fn} disabled />);

			const buttonEl = screen.getByRole('button');
			buttonEl.click()

			expect(fn).not.toBeCalled();
		});
	});

});
