import axios from 'axios';

export default axios.create({
    baseURL:'https://api.clashofclans.com/v1',
    headers: {
        'Accept':'application/json',
        'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImEzNGI4NjIyLTI5NmMtNGM5Ny04NWFiLWU4OGIxYWRjNWVmNiIsImlhdCI6MTU5ODUxNTE4NCwic3ViIjoiZGV2ZWxvcGVyLzkyMWVhMDUyLTVlZGYtYWM3ZS0yZTM1LTY2MjIwZjgyYzRiNCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1Ny40NC4xNzYuNzAiXSwidHlwZSI6ImNsaWVudCJ9XX0.cXqQMPiZnGm8bmYjZU4LMVozipXPEqgQnnGrVLe3ia3WDR7wyd9aXVUmlKFLkKwgTkgh862gz9dCK4MrLoJEow'
    }
});