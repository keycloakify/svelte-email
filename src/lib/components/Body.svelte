<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { styleToString } from '../utils';
  interface Props extends Omit<HTMLAttributes<HTMLBodyElement>, 'style'> {
    style?: Record<string, string | number | null>;
  }

  let { style = {}, class: className, children, ...rest }: Props = $props();
</script>

<body
  {...rest}
  style={styleToString(style)}
  class={className}
>
  {@render children?.()}
</body>
