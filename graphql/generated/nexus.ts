/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Chat: { // root type
    chatId?: string | null; // String
    members?: Array<NexusGenRootTypes['ChatPerson'] | null> | null; // [ChatPerson]
    messages?: Array<NexusGenRootTypes['Messages'] | null> | null; // [Messages]
  }
  ChatPerson: { // root type
    email?: string | null; // String
    name?: string | null; // String
  }
  Messages: { // root type
    content?: string | null; // String
    date?: string | null; // String
    from?: string | null; // String
    sentiment?: number | null; // Int
  }
  Mutation: {};
  Note: { // root type
    email?: string | null; // String
    list?: Array<NexusGenRootTypes['NoteDescription'] | null> | null; // [NoteDescription]
  }
  NoteDescription: { // root type
    desc?: string | null; // String
  }
  Query: {};
  Todo: { // root type
    email?: string | null; // String
    list?: Array<NexusGenRootTypes['TodoDescription'] | null> | null; // [TodoDescription]
  }
  TodoDescription: { // root type
    desc?: string | null; // String
    status?: boolean | null; // Boolean
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Chat: { // field return type
    chatId: string | null; // String
    members: Array<NexusGenRootTypes['ChatPerson'] | null> | null; // [ChatPerson]
    messages: Array<NexusGenRootTypes['Messages'] | null> | null; // [Messages]
  }
  ChatPerson: { // field return type
    email: string | null; // String
    name: string | null; // String
  }
  Messages: { // field return type
    content: string | null; // String
    date: string | null; // String
    from: string | null; // String
    sentiment: number | null; // Int
  }
  Mutation: { // field return type
    completeTodo: NexusGenRootTypes['Todo'] | null; // Todo
    createChat: NexusGenRootTypes['Chat'] | null; // Chat
    createNote: NexusGenRootTypes['Note'] | null; // Note
    createTodo: NexusGenRootTypes['Todo'] | null; // Todo
    deleteNote: NexusGenRootTypes['Note'] | null; // Note
    deleteTodo: NexusGenRootTypes['Todo'] | null; // Todo
  }
  Note: { // field return type
    email: string | null; // String
    list: Array<NexusGenRootTypes['NoteDescription'] | null> | null; // [NoteDescription]
  }
  NoteDescription: { // field return type
    desc: string | null; // String
  }
  Query: { // field return type
    ChatByChatId: NexusGenRootTypes['Chat'] | null; // Chat
    ChatsByEmail: Array<NexusGenRootTypes['Chat'] | null> | null; // [Chat]
    NoteByEmail: NexusGenRootTypes['Note'] | null; // Note
    TodoByEmail: NexusGenRootTypes['Todo'] | null; // Todo
  }
  Todo: { // field return type
    email: string | null; // String
    list: Array<NexusGenRootTypes['TodoDescription'] | null> | null; // [TodoDescription]
  }
  TodoDescription: { // field return type
    desc: string | null; // String
    status: boolean | null; // Boolean
  }
}

export interface NexusGenFieldTypeNames {
  Chat: { // field return type name
    chatId: 'String'
    members: 'ChatPerson'
    messages: 'Messages'
  }
  ChatPerson: { // field return type name
    email: 'String'
    name: 'String'
  }
  Messages: { // field return type name
    content: 'String'
    date: 'String'
    from: 'String'
    sentiment: 'Int'
  }
  Mutation: { // field return type name
    completeTodo: 'Todo'
    createChat: 'Chat'
    createNote: 'Note'
    createTodo: 'Todo'
    deleteNote: 'Note'
    deleteTodo: 'Todo'
  }
  Note: { // field return type name
    email: 'String'
    list: 'NoteDescription'
  }
  NoteDescription: { // field return type name
    desc: 'String'
  }
  Query: { // field return type name
    ChatByChatId: 'Chat'
    ChatsByEmail: 'Chat'
    NoteByEmail: 'Note'
    TodoByEmail: 'Todo'
  }
  Todo: { // field return type name
    email: 'String'
    list: 'TodoDescription'
  }
  TodoDescription: { // field return type name
    desc: 'String'
    status: 'Boolean'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    completeTodo: { // args
      desc: string; // String!
      email: string; // String!
    }
    createChat: { // args
      email: string; // String!
      name: string; // String!
    }
    createNote: { // args
      desc: string; // String!
      email: string; // String!
    }
    createTodo: { // args
      desc: string; // String!
      email: string; // String!
    }
    deleteNote: { // args
      desc: string; // String!
      email: string; // String!
    }
    deleteTodo: { // args
      desc: string; // String!
      email: string; // String!
    }
  }
  Query: {
    ChatByChatId: { // args
      chatId?: string | null; // ID
    }
    ChatsByEmail: { // args
      email?: string | null; // ID
    }
    NoteByEmail: { // args
      email?: string | null; // ID
    }
    TodoByEmail: { // args
      email?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}