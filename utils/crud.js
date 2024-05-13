export async function pagination(model, event, where = {}, include = {}) {
    const query = getQuery(event);

    const total = await model.count({
        where: where,
    });
    const data = await model.findMany({
        where: where,
        ...(query._page > 1
            ? { skip: parseInt(query._page * query._limit - query._limit) }
            : {}),
        ...(query._limit > 1 ? { take: parseInt(query._limit) } : {}),
        orderBy: {
            createdAt: "asc",
        },
        include: include,
    });

    return {
        data: data,
        total: total,
    }; 
}
