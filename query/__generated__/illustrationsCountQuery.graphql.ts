/**
 * @generated SignedSource<<be5124024d478971be116cfe3894410d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type illustrationsCountQuery$variables = {};
export type illustrationsCountQuery$data = {
  readonly illustrationsCollection: {
    readonly total: number;
  } | null;
};
export type illustrationsCountQuery = {
  response: illustrationsCountQuery$data;
  variables: illustrationsCountQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "IllustrationsCollection",
    "kind": "LinkedField",
    "name": "illustrationsCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "total",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "illustrationsCountQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "illustrationsCountQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a6de974aa4df3d9350d618daebfd5391",
    "id": null,
    "metadata": {},
    "name": "illustrationsCountQuery",
    "operationKind": "query",
    "text": "query illustrationsCountQuery {\n  illustrationsCollection {\n    total\n  }\n}\n"
  }
};
})();

(node as any).hash = "5e1e9fd328d40f31673198c9ba660130";

export default node;
