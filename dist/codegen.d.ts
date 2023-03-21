import ts from 'typescript';
import WebIDL2 from 'webidl2';
export declare class CodeGen {
    private readonly context;
    constructor(context: ts.TransformationContext);
    private readonly primitives;
    private getSingleType;
    private getType;
    private getParameterType;
    private getAttributeType;
    private getReturnType;
    private constructWrapperObjectHelper;
    private constructVoidPtrHelper;
    /**
     * export const wrapPointer
     */
    private constructWrapPointerHelper;
    /**
     * export const getPointer
     */
    private constructGetPointerHelper;
    /**
     * export const castObject
     */
    private constructCastObjectHelper;
    /**
     * export const compare
     */
    private constructCompareHelper;
    /**
     * export const getCache
     */
    private constructGetCacheHelper;
    /**
     * export const destroy
     */
    private constructDestroyHelper;
    /**
     * export const getClass
     */
    private constructGetClassHelper;
    /**
     * export const NULL
     */
    private constructNullHelper;
    private helpers;
    private getParameterDeclaration;
    private getConstructor;
    private getOperation;
    private static classifyIdlType;
    private static classifyIdlTypeDescription;
    private getAttribute;
    private getCommonClassBoilerplateMembers;
    private getDeletableClassBoilerplateMembers;
    /**
     * Additional members for classes which have a public constructor bound
     */
    private getConstructibleClassBoilerplateMembers;
    private static getParentClassName;
    private static isConstructorMember;
    private static isConstructibleType;
    private roots;
    codegen: (roots: WebIDL2.IDLRootType[], namespaceName: string) => ts.Statement;
}
//# sourceMappingURL=codegen.d.ts.map