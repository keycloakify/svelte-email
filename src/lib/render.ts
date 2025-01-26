/* eslint-disable @typescript-eslint/no-explicit-any */
import { convert } from 'html-to-text';
import pretty from 'pretty';
import type { ComponentProps, Component, SvelteComponent, ComponentType } from 'svelte';
import { render as svelteRender } from 'svelte/server';

type Render<
  Comp extends SvelteComponent<any> | Component<any>,
  Props extends ComponentProps<Comp> = ComponentProps<Comp>,
> = {
  template: Comp extends SvelteComponent<any> ? ComponentType<Comp> : Comp;
  props: Omit<Props, '$$slots' | '$$events'>;
  options?: {
    plainText?: boolean;
    pretty?: boolean;
  };
};

export const render = <
  Comp extends SvelteComponent<any> | Component<any>,
  Props extends ComponentProps<Comp> = ComponentProps<Comp>,
>({
  template,
  props,
  options,
}: Render<Comp, Props>) => {
  const { head, body } = svelteRender(template, { props });
  const html = `${head}${body}`;
  if (options?.plainText) {
    return renderAsPlainText(html);
  }
  const doctype =
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  const markup = html;
  const document = `${doctype}${markup}`;
  if (options?.pretty) {
    return pretty(document);
  }
  return document;
};

const renderAsPlainText = (markup: string) => {
  return convert(markup, {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: '#__svelte-email-preview', format: 'skip' },
    ],
  });
};
