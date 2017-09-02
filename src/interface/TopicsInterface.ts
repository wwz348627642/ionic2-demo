export interface TopicsParams {
	page?: number
	tab: string  // ask, share, job, good
	limit?: number
	mdrender?: boolean  // false 不渲染, true渲染markdown, 默认为true
}

export interface TopicItemParams { 
	id: string
	mdrender?: boolean
	accesstoken?: boolean // 当需要知道一个主题是否被特定用户收藏时，才需要带此参数。会影响返回值中的 is_collect 值
}

export interface NewTopicItemParams {
	title: string
	tab: string    // ask, share, job
	content: string 
}

export interface UpdateTopicParams {
	topic_id: number
	title: string
	tab: string
	content: string 
}
