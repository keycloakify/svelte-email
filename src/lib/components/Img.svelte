<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { styleToString } from '../utils';
  interface Props extends Omit<HTMLAttributes<HTMLImageElement>, 'style'> {
    style?: Record<string, string | number | null>;
    alt: string;
    src: string;
    width: string;
    height: string;
  }

  let {
    style = {},
    class: className,
    alt = '',
    src = '',
    width = '0',
    height = '0',
    children,
    ...rest
  }: Props = $props();

  const styleDefault = {
    display: 'block',
    outline: 'none',
    border: 'none',
    textDecoration: 'none',
    ...style,
  };
</script>

<img
  {alt}
  {src}
  {width}
  {height}
  style={styleToString(styleDefault)}
  {...rest}
  class={className}
/>
