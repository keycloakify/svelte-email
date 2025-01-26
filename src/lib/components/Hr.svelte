<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { styleToString } from '../utils';
  interface Props extends Omit<HTMLAttributes<HTMLHRElement>, 'style'> {
    style?: Record<string, string | number | null>;
  }
  let { style = {}, class: className, children, ...rest }: Props = $props();

  const styleDefault = {
    width: '100%',
    border: 'none',
    borderTop: '1px solid #eaeaea',
    ...style,
  };
</script>

<hr
  style={styleToString(styleDefault)}
  {...rest}
  class={className}
/>
