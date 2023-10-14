import Headline from './content/Headline';
import Experience from './content/Experience';
import Links from './content/Links';
import useColors from './util/Colors';
import Paper from './components/Paper';

export default function App() {
  const colors = useColors()
  return (
    <Paper>
      <Headline />
      <Experience />
      <Links />
    </Paper>
  );
}
