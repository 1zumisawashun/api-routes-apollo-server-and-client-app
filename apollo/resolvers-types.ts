import { GraphQLResolveInfo } from 'graphql';
import { User, Cart, CartItem } from '@prisma/client/index.d';
import { PlaylistModel, TrackModel, AddItemsToPlaylistPayloadModel } from './models';
import { Context } from './contexts';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddItemsToPlaylistInput = {
  /** The ID of the playlist. */
  playlistId: Scalars['ID']['input'];
  /** A comma-separated list of Spotify URIs to add. */
  uris: Array<Scalars['String']['input']>;
};

export type AddItemsToPlaylistPayload = {
  __typename?: 'AddItemsToPlaylistPayload';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** The playlist that contains the newly added items */
  playlist?: Maybe<Playlist>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

export type AddToCartInput = {
  cartId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  geo?: Maybe<Geo>;
  street?: Maybe<Scalars['String']['output']>;
  suite?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  __typename?: 'CartItem';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
};

export type Company = {
  __typename?: 'Company';
  bs?: Maybe<Scalars['String']['output']>;
  catchPhrase?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DecreaseCartItemInput = {
  cartId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['String']['output']>;
  lng?: Maybe<Scalars['String']['output']>;
};

export type IncreaseCartItemInput = {
  cartId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addItem?: Maybe<Cart>;
  addItemsToPlaylist: AddItemsToPlaylistPayload;
  decreaseCartItem?: Maybe<Cart>;
  increaseCartItem?: Maybe<Cart>;
  removeItem?: Maybe<Cart>;
};


export type MutationAddItemArgs = {
  input: AddToCartInput;
};


export type MutationAddItemsToPlaylistArgs = {
  input: AddItemsToPlaylistInput;
};


export type MutationDecreaseCartItemArgs = {
  input: DecreaseCartItemInput;
};


export type MutationIncreaseCartItemArgs = {
  input: IncreaseCartItemInput;
};


export type MutationRemoveItemArgs = {
  input: RemoveFromCartInput;
};

/** A curated collection of tracks designed for a specific activity or mood. */
export type Playlist = {
  __typename?: 'Playlist';
  /** Describes the playlist, what to expect and entices the user to listen. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID for the playlist. */
  id: Scalars['ID']['output'];
  /** The name of the playlist. */
  name: Scalars['String']['output'];
  /** The tracks of the playlist. */
  tracks: Array<Track>;
};

export type Query = {
  __typename?: 'Query';
  cart?: Maybe<Cart>;
  featuredPlaylists: Array<Playlist>;
  hello?: Maybe<Scalars['String']['output']>;
  jsonPlaceholderPost?: Maybe<JsonPlaceholderPost>;
  jsonPlaceholderPosts: Array<JsonPlaceholderPost>;
  jsonPlaceholderUser?: Maybe<JsonPlaceholderUser>;
  jsonPlaceholderUsers: Array<JsonPlaceholderUser>;
  playlist?: Maybe<Playlist>;
  viewer?: Maybe<User>;
  viewers: Array<User>;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryJsonPlaceholderPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryJsonPlaceholderUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlaylistArgs = {
  id: Scalars['ID']['input'];
};


export type QueryViewerArgs = {
  id: Scalars['ID']['input'];
};

export type RemoveFromCartInput = {
  cartId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

/** A single audio file, usually a song. */
export type Track = {
  __typename?: 'Track';
  /** The track length in milliseconds. */
  durationMs: Scalars['Int']['output'];
  /** Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown) */
  explicit: Scalars['Boolean']['output'];
  /** The ID for the track. */
  id: Scalars['ID']['output'];
  /** The name of the track */
  name: Scalars['String']['output'];
  /** The URI for the track, usually a Spotify link. */
  uri: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  cart?: Maybe<Cart>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type JsonPlaceholderPost = {
  __typename?: 'jsonPlaceholderPost';
  body?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type JsonPlaceholderUser = {
  __typename?: 'jsonPlaceholderUser';
  address?: Maybe<Address>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Maybe<JsonPlaceholderPost>>>;
  username?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddItemsToPlaylistInput: AddItemsToPlaylistInput;
  AddItemsToPlaylistPayload: ResolverTypeWrapper<AddItemsToPlaylistPayloadModel>;
  AddToCartInput: AddToCartInput;
  Address: ResolverTypeWrapper<Address>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cart: ResolverTypeWrapper<Cart>;
  CartItem: ResolverTypeWrapper<CartItem>;
  Company: ResolverTypeWrapper<Company>;
  DecreaseCartItemInput: DecreaseCartItemInput;
  Geo: ResolverTypeWrapper<Geo>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IncreaseCartItemInput: IncreaseCartItemInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Playlist: ResolverTypeWrapper<PlaylistModel>;
  Query: ResolverTypeWrapper<{}>;
  RemoveFromCartInput: RemoveFromCartInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<TrackModel>;
  User: ResolverTypeWrapper<User>;
  jsonPlaceholderPost: ResolverTypeWrapper<JsonPlaceholderPost>;
  jsonPlaceholderUser: ResolverTypeWrapper<JsonPlaceholderUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddItemsToPlaylistInput: AddItemsToPlaylistInput;
  AddItemsToPlaylistPayload: AddItemsToPlaylistPayloadModel;
  AddToCartInput: AddToCartInput;
  Address: Address;
  Boolean: Scalars['Boolean']['output'];
  Cart: Cart;
  CartItem: CartItem;
  Company: Company;
  DecreaseCartItemInput: DecreaseCartItemInput;
  Geo: Geo;
  ID: Scalars['ID']['output'];
  IncreaseCartItemInput: IncreaseCartItemInput;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Playlist: PlaylistModel;
  Query: {};
  RemoveFromCartInput: RemoveFromCartInput;
  String: Scalars['String']['output'];
  Track: TrackModel;
  User: User;
  jsonPlaceholderPost: JsonPlaceholderPost;
  jsonPlaceholderUser: JsonPlaceholderUser;
};

export type AddItemsToPlaylistPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AddItemsToPlaylistPayload'] = ResolversParentTypes['AddItemsToPlaylistPayload']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playlist?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geo?: Resolver<Maybe<ResolversTypes['Geo']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['CartItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  bs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  catchPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Geo'] = ResolversParentTypes['Geo']> = {
  lat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addItem?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationAddItemArgs, 'input'>>;
  addItemsToPlaylist?: Resolver<ResolversTypes['AddItemsToPlaylistPayload'], ParentType, ContextType, RequireFields<MutationAddItemsToPlaylistArgs, 'input'>>;
  decreaseCartItem?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationDecreaseCartItemArgs, 'input'>>;
  increaseCartItem?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationIncreaseCartItemArgs, 'input'>>;
  removeItem?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationRemoveItemArgs, 'input'>>;
};

export type PlaylistResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'id'>>;
  featuredPlaylists?: Resolver<Array<ResolversTypes['Playlist']>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jsonPlaceholderPost?: Resolver<Maybe<ResolversTypes['jsonPlaceholderPost']>, ParentType, ContextType, RequireFields<QueryJsonPlaceholderPostArgs, 'id'>>;
  jsonPlaceholderPosts?: Resolver<Array<ResolversTypes['jsonPlaceholderPost']>, ParentType, ContextType>;
  jsonPlaceholderUser?: Resolver<Maybe<ResolversTypes['jsonPlaceholderUser']>, ParentType, ContextType, RequireFields<QueryJsonPlaceholderUserArgs, 'id'>>;
  jsonPlaceholderUsers?: Resolver<Array<ResolversTypes['jsonPlaceholderUser']>, ParentType, ContextType>;
  playlist?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType, RequireFields<QueryPlaylistArgs, 'id'>>;
  viewer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryViewerArgs, 'id'>>;
  viewers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type TrackResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  durationMs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  explicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JsonPlaceholderPostResolvers<ContextType = Context, ParentType extends ResolversParentTypes['jsonPlaceholderPost'] = ResolversParentTypes['jsonPlaceholderPost']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JsonPlaceholderUserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['jsonPlaceholderUser'] = ResolversParentTypes['jsonPlaceholderUser']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['jsonPlaceholderPost']>>>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  AddItemsToPlaylistPayload?: AddItemsToPlaylistPayloadResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartItem?: CartItemResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Geo?: GeoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Playlist?: PlaylistResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  jsonPlaceholderPost?: JsonPlaceholderPostResolvers<ContextType>;
  jsonPlaceholderUser?: JsonPlaceholderUserResolvers<ContextType>;
};

