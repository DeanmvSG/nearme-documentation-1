import "./vendor.scss";
import cleanupHtml from "./js/cleanupHtml";

// WIP
// FA - load individual icons to not rely on tree shaking
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
// import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
// import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

// library.add(faExclamationTriangle, faCheck, faChevronRight, faSearch);

if ($("[class^=language]").length > 0) {
  [...document.querySelectorAll("code[class*=language]")].map(cleanupHtml);

  import(/* webpackChunkName: "prism" */ "prismjs");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-markup");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-clike");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-ruby");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-git");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-liquid").then(
    () => {
      // Add our custom tags to liquid language definition
      Prism.languages.liquid.keyword = /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow|include|form|endform|render_form|query_graph|execute_query|content_for|endcontent_for|yield|input)\b/;
    }
  );
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-scss");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-sass");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-markdown");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-haml");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-css");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-css-extras");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-javascript");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-haml");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-yaml");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-graphql");
  import(/* webpackChunkName: "prism" */ "prismjs/plugins/line-numbers/prism-line-numbers");
  import(/* webpackChunkName: "prism" */ "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace");
}
