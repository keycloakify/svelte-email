<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  interface Props extends Omit<HTMLAttributes<HTMLHtmlElement>, 'style'> {
    lang?: string;
  }
  let { lang = 'en', children, ...rest }: Props = $props();
</script>

<html
  {...rest}
  id="__svelte-email"
  {lang}
>
  {@render children?.()}
</html>
