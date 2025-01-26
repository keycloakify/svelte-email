<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { styleToString } from '../utils';
  interface Props extends Omit<HTMLAttributes<HTMLTableCellElement>, 'style'> {
    style?: Record<string, string | number | null>;
  }

  let { style = {}, class: className, children, ...rest }: Props = $props();

  const styleDefault = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  };
</script>

<!-- svelte-ignore a11y_no_interactive_element_to_noninteractive_role -->
<td
  style={styleToString(styleDefault)}
  role="presentation"
  {...rest}
  class={className}
>
  {@render children?.()}
</td>
