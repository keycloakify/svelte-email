<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { styleToString } from '../utils';
  interface Props extends Omit<HTMLAttributes<HTMLParagraphElement>, 'style'> {
    style?: Record<string, string | number | null>;
  }

  let { style = {}, class: className, children, ...rest }: Props = $props();

  const styleDefault = {
    fontSize: '14px',
    lineHeight: '24px',
    margin: '16px 0',
    ...style,
  };
</script>

<p
  style={styleToString(styleDefault)}
  {...rest}
  class={className}
>
  {@render children?.()}
</p>
