<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { styleToString } from '../utils';
  interface Props extends Omit<HTMLAttributes<HTMLAnchorElement>, 'style'> {
    style?: Record<string, string | number | null>;
    target?: string;
    href: string;
  }
  let { style = {}, class: className, target = '_blank', href = '', children, ...rest }: Props = $props();

  const styleDefault = {
    color: '#067df7',
    textDecoration: 'none',
    ...style,
  };
</script>

<a
  {...rest}
  {href}
  {target}
  style={styleToString(styleDefault)}
  class={className}
>
  {@render children?.()}
</a>
