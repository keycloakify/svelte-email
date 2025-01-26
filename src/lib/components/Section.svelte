<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { styleToString } from '../utils';
  interface Props extends Omit<HTMLAttributes<HTMLTableElement>, 'style'> {
    style?: Record<string, string | number | null>;
  }

  let { style = {}, class: className, children, ...rest }: Props = $props();

  const styleDefaultTable = {
    width: '100%',
    ...style,
  };

  const styleDefaultTr = {
    display: 'grid',
    gridAutoColumns: 'minmax(0, 1fr)',
    gridAutoFlow: 'column',
  };
</script>

<table
  style={styleToString(styleDefaultTable)}
  align="center"
  border={0}
  cellPadding={0}
  cellSpacing={0}
  role="presentation"
  {...rest}
  class={className}
>
  <tbody>
    <tr style={styleToString(styleDefaultTr)}>
      {@render children?.()}
    </tr>
  </tbody>
</table>
