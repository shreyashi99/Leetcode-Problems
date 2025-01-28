/**
 * https://leetcode.com/problems/course-schedule-iv/
 * 
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course ai first if you want to take course bi.
 * 
 * For example, the pair [0, 1] indicates that you have to take course 0 before you can take course 1.
 * Prerequisites can also be indirect. If course a is a prerequisite of course b, and course b is a prerequisite of course c, then course a is a prerequisite of course c.
 * You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should answer whether course uj is a prerequisite of course vj or not.
 * Return a boolean array answer, where answer[j] is the answer to the jth query.
 * -----
 * @param {*} numCourses 
 * @param {*} prerequisites 
 * @param {*} queries 
 * @returns 
 */
function checkIfPrerequisite(numCourses, prerequisites, queries) {
    // Step 1: Initialize a 2D array for the prerequisite graph
    const isPrerequisite = Array.from({ length: numCourses }, () =>
        Array(numCourses).fill(false)
    );

    // Step 2: Populate the direct prerequisites from the input
    for (const [a, b] of prerequisites) {
        isPrerequisite[a][b] = true;
    }

    // Step 3: Apply Floyd-Warshall Algorithm to find all transitive prerequisites
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                isPrerequisite[i][j] =
                    isPrerequisite[i][j] ||
                    (isPrerequisite[i][k] && isPrerequisite[k][j]);
            }
        }
    }

    // Step 4: Answer each query based on the transitive closure
    return queries.map(([u, v]) => isPrerequisite[u][v]);
}
