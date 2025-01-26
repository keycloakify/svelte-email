<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { styleToString, withMargin } from '../utils';
  interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'> {
    style?: Record<string, string | number | null>;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    m?: string;
    mx?: string;
    my?: string;
    mt?: string;
    mr?: string;
    mb?: string;
    ml?: string;
  }

  let { style = {}, class: className, as = 'h1', m, mx, my, mt, mr, mb, ml, children, ...rest }: Props = $props();
</script>

<svelte:element
  this={as}
  style={styleToString({
    ...withMargin({
      m: m,
      mx: mx,
      my: my,
      mt: mt,
      mr: mr,
      mb: mb,
      ml: ml,
    }),
    ...style,
  })}
  class={className}
  {...rest}
>
  {@render children?.()}
</svelte:element>
