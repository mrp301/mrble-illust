/**
 * @generated SignedSource<<2a574d39b011d461630f5ab9d38cad22>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BookViewerArea_fragment$data = {
  readonly cover: {
    readonly title: string | null;
    readonly url: string | null;
  } | null;
  readonly samplePagesCollection: {
    readonly items: ReadonlyArray<{
      readonly title: string | null;
      readonly url: string | null;
    } | null>;
  } | null;
  readonly " $fragmentType": "BookViewerArea_fragment";
};
export type BookViewerArea_fragment = BookViewerArea_fragment$data;
export type BookViewerArea_fragment$key = {
  readonly " $data"?: BookViewerArea_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BookViewerArea_fragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookViewerArea_fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Asset",
      "kind": "LinkedField",
      "name": "cover",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetCollection",
      "kind": "LinkedField",
      "name": "samplePagesCollection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Asset",
          "kind": "LinkedField",
          "name": "items",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Books",
  "abstractKey": null
};
})();

(node as any).hash = "82efe44433ddadc2ca3dc297a3f910f0";

export default node;
