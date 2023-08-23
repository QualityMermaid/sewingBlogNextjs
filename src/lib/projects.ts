import { allPosts as POSTS} from ".contentlayer/generated"


export function getPosts(){
    return POSTS
}

export function getPostsByMade(made: string){
    return POSTS.filter((post)=> post.made === true)
}


export function getPostBySlug(slug: string){
    return POSTS.find((post)=> post.slug === slug)
}
