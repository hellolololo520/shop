package shop.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.*;
import shop.domain.*;
import shop.infra.AbstractEvent;

//<<< DDD / Domain Event
@Data
@ToString
public class InventoryDesced extends AbstractEvent {

    private Long id;
    private Integer quantity;

    public InventoryDesced(Inventory aggregate) {
        super(aggregate);
    }

    public InventoryDesced() {
        super();
    }
}
//>>> DDD / Domain Event
