/**
 * @generated SignedSource<<1bf33a6ea3b8de15984a6462afcc8d6b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecommendBookList_fragment$data = {
  readonly items: ReadonlyArray<{
    readonly cover: {
      readonly height: number | null;
      readonly title: string | null;
      readonly url: string | null;
      readonly width: number | null;
    } | null;
    readonly event: string | null;
    readonly releaseDate: any | null;
    readonly slug: string | null;
    readonly title: string | null;
  } | null>;
  readonly " $fragmentType": "RecommendBookList_fragment";
};
export type RecommendBookList_fragment$key = {
  readonly " $data"?: RecommendBookList_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecommendBookList_fragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecommendBookList_fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Books",
      "kind": "LinkedField",
      "name": "items",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "event",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "releaseDate",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Asset",
          "kind": "LinkedField",
          "name": "cover",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "width",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "height",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "BooksCollection",
  "abstractKey": null
};
})();

(node as any).hash = "784a8f05608ba8bd4d3db707de086225";

export default node;
