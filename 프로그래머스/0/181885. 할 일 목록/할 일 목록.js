function solution(todo_list, finished) {
    const unfinishedTasks = [];
    
    for (let i = 0; i < todo_list.length; i++) {
        if (!finished[i]) { // 만약 해당 일을 아직 마치지 못했다면
            unfinishedTasks.push(todo_list[i]); // unfinishedTasks 배열에 추가
        }
    }
    
    return unfinishedTasks; // 아직 마치지 못한 일들을 담은 배열 반환
}
