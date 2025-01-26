<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { styleToString } from '../utils';
  interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
    style?: Record<string, string | number | null>;
  }

  let { style = {}, class: className, children, ...rest }: Props = $props();

  const styles = { maxWidth: '37.5em', ...style };
  const inlineStyle = styleToString(styles);
</script>

<div>
  {@html `<!--[if mso | IE]>
          <table role="presentation" width="100%" align="center" style="${inlineStyle}" class="${className}"><tr><td></td><td style="width:37.5em;background:#ffffff">
        <![endif]-->`}
</div>
<div
  {...rest}
  style={inlineStyle}
  class={className}
>
  {@render children?.()}
</div>
<div>
  {@html `<!--[if mso | IE]>
          </td><td></td></tr></table>
          <![endif]-->`}
</div>
