import style from './style.module.scss';
import { Button } from 'components/button';
import { ReactComponent as HeartIcon } from 'assets/img/icon/heart.svg';
import { ReactComponent as HeartMulticolorIcon } from 'assets/img/icon/heart-multicolor.svg';
import { ReactComponent as TestIcon } from 'assets/img/icon/test.svg';

function App() {

  return (
    <main>
      <h1>
        Universal button
      </h1>

      <section>
        <h2>
          Size
        </h2>

        <div className={style.buttons}>
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
          <Button size="xl">XLarge Button</Button>
        </div>
      </section>

      <section>
        <h2>
          Type
        </h2>

        <div className={style.buttons}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <div className={style.greyBackground}>
            <Button variant="secondary-inverse">Secondary-inverse</Button>
          </div>
          <Button variant="ghost">Ghost</Button>
          <Button variant="negative">Negative</Button>
          <div className={style.greyBackground}>
            <Button variant="negative-inverse">Negative-inverse</Button>
          </div>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section>
        <h2>
          Content
        </h2>

        <div className={style.buttons}>
          <Button>Text</Button>
          <Button icon={<HeartIcon />}>Icon+text</Button>

          <Button size="md" icon={<TestIcon />} />
          <Button size="lg" icon={<HeartMulticolorIcon />} />

          <Button spinner>Spinner</Button>
          <Button spinner disabled>Disabled spinner</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
