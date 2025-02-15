function songs(input) {
    let songsNum = Number(input.shift());
    let command = input.pop();
    let songsList = [];
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    for (let i = 0; i < songsNum; i++) {
        let [listType, name, duration] = input[i].split('_');
        let newSong = new Song(listType, name, duration);
        songsList.push(newSong);
    }

    if (command == 'all') {
        for (let songInfo of songsList) {
            console.log(songInfo.name);
        }
    } else {
        for (let songInfo of songsList) {
            if (songInfo.typeList == command) {
                console.log(songInfo.name);
            }
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);