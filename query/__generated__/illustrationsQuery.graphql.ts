/**
 * @generated SignedSource<<63eecc82b29c0554e6488a9bb6a01b70>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type illustrationsQuery$variables = {};
export type illustrationsQueryVariables = illustrationsQuery$variables;
export type illustrationsQuery$data = {
  readonly illustrationsCollection: {
    readonly items: ReadonlyArray<{
      readonly createDate: any | null;
      readonly image: {
        readonly url: string | null;
        readonly width: number | null;
        readonly height: number | null;
      } | null;
      readonly opusNo: number | null;
      readonly title: string | null;
      readonly tag: ReadonlyArray<string | null> | null;
    } | null>;
  } | null;
};
export type illustrationsQueryResponse = illustrationsQuery$data;
export type illustrationsQuery = {
  variables: illustrationsQueryVariables;
  response: illustrationsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "order",
        "value": "createDate_DESC"
      }
    ],
    "concreteType": "IllustrationsCollection",
    "kind": "LinkedField",
    "name": "illustrationsCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Illustrations",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "opusNo",
            "storageKey": null
          },
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
            "name": "tag",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "illustrationsCollection(order:\"createDate_DESC\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "illustrationsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "illustrationsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "470c7631e2e23065cf8809e5c7f6b403",
    "id": null,
    "metadata": {},
    "name": "illustrationsQuery",
    "operationKind": "query",
    "text": "query illustrationsQuery {\n  illustrationsCollection(order: createDate_DESC) {\n    items {\n      createDate\n      image {\n        url\n        width\n        height\n      }\n      opusNo\n      title\n      tag\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b986d1755ab1de3d7952b7118e8f78e7";

export default node;
